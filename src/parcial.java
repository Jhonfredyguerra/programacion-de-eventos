import java.util.HashMap;
import java.util.Map;

public class parcial {
    public static void main(String[] args) {
        ListaEstudiante listaEstudiante = new ListaEstudiante();
        ListaCarrera listaCarrera = new ListaCarrera();

        // Crear la lista para guardar los reportes
        Map<Long, Double> promediosNotasPorCarrera = new HashMap<>();
        Map<Long, Double> promediosEdadesPorCarrera = new HashMap<>();
        Map<Long, Integer> cantidadEstudiantesPorCarrera = new HashMap<>();

        // Calcular promedios de notas y edades por carrera
        for (Estudiante estudiante : listaEstudiante.estudiantes) {
            promediosNotasPorCarrera.put(estudiante.carrera, promediosNotasPorCarrera.getOrDefault(estudiante.carrera, 0.0) + estudiante.promedio);
            promediosEdadesPorCarrera.put(estudiante.carrera, promediosEdadesPorCarrera.getOrDefault(estudiante.carrera, 0.0) + estudiante.edad);
            cantidadEstudiantesPorCarrera.put(estudiante.carrera, cantidadEstudiantesPorCarrera.getOrDefault(estudiante.carrera, 0) + 1);
        }

        // Llamar al método para imprimir los reportes
        imprimirReportes(listaCarrera, promediosNotasPorCarrera, promediosEdadesPorCarrera, cantidadEstudiantesPorCarrera);
    }

    public static void imprimirReportes(ListaCarrera listaCarrera, Map<Long, Double> promediosNotasPorCarrera,
                                        Map<Long, Double> promediosEdadesPorCarrera, Map<Long, Integer> cantidadEstudiantesPorCarrera) {
        System.out.println("Reporte de Carreras:");
        for (Carrera carrera : listaCarrera.carreras) {
            Long codigoCarrera = carrera.codigo;
            double promedioNotas = promediosNotasPorCarrera.getOrDefault(codigoCarrera, 0.0) / cantidadEstudiantesPorCarrera.getOrDefault(codigoCarrera, 1);
            double promedioEdades = promediosEdadesPorCarrera.getOrDefault(codigoCarrera, 0.0) / cantidadEstudiantesPorCarrera.getOrDefault(codigoCarrera, 1);
            int cantidadEstudiantes = cantidadEstudiantesPorCarrera.getOrDefault(codigoCarrera, 0);

            System.out.println("Carrera: " + carrera.nombre);
            System.out.println("Promedio de notas: " + promedioNotas);
            System.out.println("Promedio de edades: " + promedioEdades);
            System.out.println("Total de estudiantes: " + cantidadEstudiantes);
            System.out.println();
        }
    }
}