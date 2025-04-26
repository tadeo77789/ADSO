public class LicenciaC extends Licencia {

private final int value;
public LicenciaC(int value) {
    super("Licencia C"); 
    this.value = value;
}

@Override
public int calculateValue() {
    return this.value;
}
}