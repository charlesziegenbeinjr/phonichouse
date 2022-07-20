-- Daily Price TABLE
-- PK: price_id
-- foreign key: security_id -> security.security_id

DROP TABLE IF EXISTS `daily_price` ;

CREATE TABLE IF NOT EXISTS `daily_price` (

  `price_id` INT(11) NOT NULL AUTO_INCREMENT,
  `security_id` INT(11) NOT NULL,
  `price_date` DATE NOT NULL,
  `created_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
  `last_updated` DATETIME NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `open_price` DECIMAL(11,6) NULL DEFAULT NULL,
  `high_price` DECIMAL(11,6) NULL DEFAULT NULL,
  `low_price` DECIMAL(11,6) NULL DEFAULT NULL,
  `close_price` DECIMAL(11,6) NULL DEFAULT NULL,
  `volume` BIGINT(20) NULL DEFAULT NULL,
  --`adj_close_price` DECIMAL(11,6) NULL DEFAULT NULL,

  PRIMARY KEY (`price_id`),

  INDEX `price_date` (`price_date` ASC),
  INDEX `security_id` (`security_id` ASC),

  CONSTRAINT `fk_security_id`
    FOREIGN KEY (`security_id`)
    REFERENCES `security` (`security_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION

)

ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;