public class Force extends Forces {
    private final int mass;
    private final int acceleration;
    private int force;

    public Force(int mass, int acceleration) {
        super("Fuerza", "Fuerza");
        this.mass = mass;
        this.acceleration = acceleration;
    }

    public int getMass() {
        return mass;
    }

    public int getAcceleration() {
        return acceleration;
    }

    public Float calculateForce() {
        this.force = this.mass * this.acceleration;
        return (float) force;
    }
}
