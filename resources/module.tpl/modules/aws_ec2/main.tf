terraform {
  required_version = "1.6.2"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.24.0"
    }
  }
}

# Deploy an EC2 Instance.
resource "aws_instance" "example" {
  # Run an Ubuntu 18.04 AMI on the EC2 instance.
  ami                    = "ami-02cad064a29d4550c"
  instance_type          = "t2.micro"
  vpc_security_group_ids = [aws_security_group.instance.id]

  # When the instance boots, start a web server on port 8080 that responds with "Hello, World!".
  user_data = <<EOF
#!/bin/bash
echo "Hello, World!" > index.html
nohup busybox httpd -f -p 8080 &
EOF
}

# Allow the instance to receive requests on port 8080.
resource "aws_security_group" "instance" {
  ingress {
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
