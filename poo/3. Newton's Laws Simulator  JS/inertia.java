public class Inertia extends Forces {
    private int inertia;
    private final int mass;

    public Inertia(int mass) {
        super("Inercia", "Inercia");
        this.mass = mass;
        this.inertia = mass;
    }

    public int getInertia() {
        return inertia;
    }

    public int getMass() {
        return mass;
    }

    @Override
    public Float calculateForce() {
        this.inertia = this.mass;
        return (float) inertia;
    }
}
