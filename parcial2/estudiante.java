class Estudiante {
    String nombre;
    int edad;
    Long carrera;
    double promedio;
    // Constructores, getters, setters, etc
    public Estudiante(String nombre, int edad, Long carrera, double promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.promedio = promedio;
    }

    @Override
    public String toString() {
        return "Nombre: " + nombre + ", Edad: " + edad + ", Carrera: " + carrera + ", Promedio: " + promedio;
    }
}