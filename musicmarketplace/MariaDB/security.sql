-- Security TABLE
-- PK: security_id

DROP TABLE IF EXISTS `security` ;

CREATE TABLE IF NOT EXISTS `security` (

  `security_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ticker` VARCHAR(10) NOT NULL,
  `artist_name` VARCHAR(100) NULL,
  `genre` VARCHAR(100) NULL,
  `created_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `last_updated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  --`industry` VARCHAR(100) NULL,

  PRIMARY KEY (`security_id`),

  INDEX `ticker` (`ticker` ASC)

 /*   CONSTRAINT `fk_exchange_id`
    FOREIGN KEY (`exchange_id`)
    REFERENCES `exchange` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION */
)

ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;