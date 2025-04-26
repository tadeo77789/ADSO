public class LicenciaB extends Licencia {
    private final int value;

    public LicenciaB(int value) {
        super("Licencia B"); // Llama al constructor de la clase base Licencia
        this.value = value;
    }

    @Override
    public int calculateValue() {
        return this.value;
    }
}
