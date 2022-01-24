import { Product } from '../../models';
import { successResponse, errorResponse } from '../../helpers';
import { getPagination, getPagingData } from '../utils';

export const findAll = async (req, res) => {
  try {
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    const products = await Product.findAndCountAll({
      order: [['createdAt', 'DESC']],
      offset,
      limit,
    });

    return successResponse(req, res, getPagingData(products, page, limit));
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findByPk(id);

    console.log(product);
    if (!product) {
      return errorResponse(req, res, `Product ${id} not found`, 404);
    }

    return successResponse(req, res, { product });
  } catch (error) {
    return errorResponse(req, res, error.message, 400);
  }
};

// Create and Save a new product
export const createProduct = async (req, res) => {
  const product = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    description: req.body.description,
    image_url: req.body.imageUrl,
  };

  try {
    const newProduct = await Product.create(product);

    return successResponse(req, res, { product: newProduct });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// Update product by id
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.update(req.body, {
      where: { id: req.params.id },
    });

    return successResponse(req, res, { product });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// Delete product by id
export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });

    return successResponse(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
