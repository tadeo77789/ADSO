public abstract class Forces {
    private final String name;
    private final String nameSpanish;

    public Forces(String name, String nameSpanish) {
        this.name = name;
        this.nameSpanish = nameSpanish;
    }

    public String getName() {
        return name;
    }

    public String getNameSpanish() {
        return nameSpanish;
    }

    public abstract Float calculateForce();
}
