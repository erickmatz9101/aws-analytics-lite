
resource "aws_instance" "mysql_server" {
  ami           = "ami-0f3caa1cf4417e51b" # Amazon Linux 2 en us-east-1
  instance_type = "t3.micro"
  key_name      = "ec2-keypair"  # tu par de llaves para acceso SSH

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo yum install -y mysql-server
              sudo systemctl start mysqld
              sudo systemctl enable mysqld
              mysql -e "CREATE DATABASE pymesdb;"
              mysql -e "CREATE USER 'adminuser'@'%' IDENTIFIED BY 'SuperSecret123!';"
              mysql -e "GRANT ALL PRIVILEGES ON pymesdb.* TO 'adminuser'@'%';"
              mysql -e "FLUSH PRIVILEGES;"
              EOF

  tags = {
    Name = "MySQL-EC2"
  }
}

