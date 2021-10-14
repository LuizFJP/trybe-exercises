SELECT Piece, Price FROM Provides where Provider = "RBT";
SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;
SELECT Provider, Price FROM Provides ORDER BY Price LIMIT 4 OFFSET 2;
SELECT * FROM Provides where Provider = "HAL" ORDER BY Price DESC;