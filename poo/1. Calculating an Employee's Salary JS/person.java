public abstract class person {
    private final int identifity;
    private final String name;
    private final String lastName;

    public person(int identifity, String name, String lastName) {
        this.identifity = identifity;
        this.name = name;
        this.lastName = lastName;
    }
    public int getIdentifity() {
        return identifity;
    }
    public String getName() {
        return name;
    }
    public String getLastName() {
        return lastName;
    }
}