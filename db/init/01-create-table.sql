CREATE TABLE IF NOT EXISTS items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NULL
);

INSERT INTO items (name, description) VALUES
('Caneta Azul', 'Caneta esferográfica'),
('Notebook Lenovo', 'Para programadores'),
('Cadeira Gamer', 'Conforto extremo'),
('Monitor 27 Polegadas', 'IPS 144Hz'),
('Teclado Mecânico', 'Switch Blue'),
('Mouse Gamer RGB', 'Botões programáveis'),
('Headset HyperX', 'Som de alta qualidade'),
('Webcam Full HD', 'Ideal para streaming'),
('Mesa de Escritório', 'Mesa em L reforçada'),
('Lâmpada RGB', 'Iluminação ambiente');