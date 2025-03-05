Algoritmo RecolectarDinero
    Definir total, donacion Como Entero
    
    total <- 0
    
    Mientras total < 200 Hacer
        Escribir "Ingrese la cantidad donada (10, 20 o 50): "
        Leer donacion
        
        Si donacion = 10 O donacion = 20 O donacion = 50 Entonces
            total <- total + donacion
        Sino
            Escribir "Donación no válida. Solo se aceptan 10, 20 o 50."
        FinSi
    FinMientras
    
    Escribir "¡Felicidades! Has recolectado S/. ", total
FinAlgoritmo