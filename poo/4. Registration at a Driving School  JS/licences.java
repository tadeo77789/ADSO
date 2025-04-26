public abstract class Licencia {
private final String name;
public Licencia(String name) {
    this.name = name;
}

public String getName() {
    return this.name;
}
public abstract int calculateValue();
}