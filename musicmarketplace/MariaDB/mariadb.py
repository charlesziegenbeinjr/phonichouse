# Packages used
import time
import pandas as pd
import pymysql.cursors
# from pandas_datareader import data as pdr


# Connect to MariaDB
conn = pymysql.connect(host='localhost', 
                       user='root', 
                       db='stock_prices')
cursor = conn.cursor()

#  Should we add an artist table in MariaDB? How do we pull artist table from MongoDB?

# Adding new Security template
sql = "INSERT INTO security (ticker, artist_name, genre) VALUES ('KANYE', 'YE', 'HipHop')"
cursor.execute(sql)
conn.commit()

# Adding a new daily_price template
sql = "INSERT INTO daily_price(ticker_id, price_date, open_price, high_price, low_price, close_price, adj_close_price, volume) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
cursor.execute(sql)
conn.commit()








