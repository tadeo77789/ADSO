public class Cliente extends Person {
    private String name;
    private String lastName;
    private double weight;
    private double stature;

    public Cliente(String name, String lastName, double weight, double stature) {
        super(1080292891); // ID de la persona
        this.name = name;
        this.lastName = lastName;
        this.weight = weight;
        this.stature = stature;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public double getWeight() {
        return weight;
    }

    public double getStature() {
        return stature;
    }
}
