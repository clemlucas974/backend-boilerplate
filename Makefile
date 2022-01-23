DC=docker-compose

.DEFAULT_GOAL := help
.PHONY: help

help:
.PHONY : help
help : Makefile
	@sed -n 's/^##//p' $<

##
## Project setup
##---------------------------------------------------------------------------

.PHONY: logs

##
## Docker
##---------------------------------------------------------------------------

## up				: mount the containers
up:
	@echo "------- Starting services --------"
	@$(DC) up -d

## stop				: stops the containers
stop:
	@echo "------- Stop services --------"
	@$(DC) stop

## down				: removes the containers and their volumes
down:
	@echo "------- Removing services --------"
	@$(DC) down
## restart 			: restart the containers 
restart: stop up
	
## pull				: pull the containers
pull:
	@echo "------- Pulling services images --------"
	@$(DC) pull

## ps				: list the process statuses
ps:
	@echo "------- The process statuses--------"
	@$(DC) ps

## logs				: display all containers logs
logs:
	@echo "-------Display all containers logs--------"
	@$(DC) logs -f
