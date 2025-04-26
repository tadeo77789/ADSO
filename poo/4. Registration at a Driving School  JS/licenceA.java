public class LicenciaA extends Licencia {

    private final int value;
    public LicenciaA(int value) {
        super("Licencia A"); 
        this.value = value;
    }

    @Override
    public int calculateValue() {
        return this.value;
    }
}
