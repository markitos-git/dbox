FROM mariadb:10.1

ENV MYSQL_USER root
ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE dbox

# Restore sql dump file
COPY all.sql /docker-entrypoint-initdb.d/
COPY test.sh /docker-entrypoint-initdb.d/
RUN chown -R mysql:mysql /docker-entrypoint-initdb.d/
CMD ["mysqld", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]
RUN sed -i  s/#bind-address=0.0.0.0/bind-address=0.0.0.0/ /etc/mysql/my.cnf
RUN sed -i  "s/= 100$/= 1000/" /etc/mysql/my.cnf

# Clean up
RUN rm -fr /tmp/*

WORKDIR /var/www/vhosts/dbox
