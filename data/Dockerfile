FROM mysql:latest

# Create the target database during container startup
COPY ./students.sql /docker-entrypoint-initdb.d/ 

ENV MYSQL_ROOT_PASSWORD=root
EXPOSE 3306
CMD ["mysqld"]

