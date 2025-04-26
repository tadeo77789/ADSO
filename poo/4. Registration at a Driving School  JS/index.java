public class Main {
    public static void main(String[] args) {
        Estudiante estudiante = new Estudiante();
        LicenciaA licenciaA = new LicenciaA(227500);
        LicenciaB licenciaB = new LicenciaB(273900);
        LicenciaC licenciaC = new LicenciaC(273900);

        System.out.println("Student:");
        System.out.println("Name: " + estudiante.getName() + " " + estudiante.getLastName());
        System.out.println("Identity: " + estudiante.getIdentifity());
        System.out.println("Address: " + estudiante.getAddress());
        System.out.println("Telephone: " + estudiante.getTelephone());
        System.out.println("RH: " + estudiante.getRh());
        System.out.println("License: " + estudiante.getLicense());

        System.out.println("\nLicences:");
        System.out.println(licenciaA.getName() + ": " + formatCurrency(licenciaA.calculateValue()));
        System.out.println(licenciaB.getName() + ": " + formatCurrency(licenciaB.calculateValue()));
        System.out.println(licenciaC.getName() + ": " + formatCurrency(licenciaC.calculateValue()));
    }

    public static String formatCurrency(double value) {
        return String.format("%,.0f", value);
    }
}