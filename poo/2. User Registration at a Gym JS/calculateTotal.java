public abstract class CalculateTotal {
    private final String name;
    private final String lastName;

    public CalculateTotal(String name, String lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public abstract double calculate();
}
