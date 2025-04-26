public class Action extends Forces {
    private final int action;
    private int reaction;

    public Action(int action, int reaction) {
        super("Action and Reaction", "Acción y Reacción");
        this.action = action;
        this.reaction = reaction;
    }

    public int getAction() {
        return action;
    }

    public int getReaction() {
        return reaction;
    }

    public Float calculateForce() {
        this.reaction = -this.action;
        return (float) reaction;
    }
}