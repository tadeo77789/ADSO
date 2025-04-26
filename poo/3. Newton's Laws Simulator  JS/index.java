public class NewtonsLawsSimulator {
    public static void main(String[] args) {

        Inertia inertia = new Inertia(5);
        Force force = new Force(10, 4);
        Action action = new Action(5, 0);

        System.out.println(inertia.getNameSpanish() + ": " + inertia.calculateForce());
        System.out.println();
        
        System.out.println(force.getNameSpanish() + ": ");
        System.out.println(force.getMass() + " x " + force.getAcceleration() + ": " + force.calculateForce());
        System.out.println();
        
        System.out.println(action.getNameSpanish() + ": " + action.calculateForce());
        System.out.println("Action: " + action.getAction());
        System.out.println("Reaction: " + action.getReaction());
    }
}
