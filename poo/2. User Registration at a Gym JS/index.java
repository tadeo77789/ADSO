import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {
        DecimalFormat formatter = new DecimalFormat("#,###");

        Essential essential = new Essential(10);
        Half half = new Half(10);
        Premium premium = new Premium(10);
        Cliente cliente = new Cliente("Luis", "Duarte", 56.6, 1.70);

        System.out.println("Gym\n");

        System.out.println("Essential: $" + formatter.format(essential.calculate()));
        System.out.println("La Hora cuesta: $" + formatter.format(essential.getValue()) + "\n");

        System.out.println("Half: $" + formatter.format(half.calculate()));
        System.out.println("Guided Classes: $" + formatter.format(half.getGuidedClasses()));
        System.out.println("La Hora cuesta: $" + formatter.format(half.getValue()) + "\n");

        System.out.println("Premium: $" + formatter.format(premium.calculate()));
        System.out.println("Coach: $" + formatter.format(premium.getCoach()));
        System.out.println("Humid Area: $" + formatter.format(premium.getHumidArea()));
        System.out.println("La Hora cuesta: $" + formatter.format(premium.getValue()) + "\n");

        System.out.println("Cliente: " + cliente.getName() + " " + cliente.getLastName());
        System.out.println("Weight: " + cliente.getWeight());
        System.out.println("Stature: " + cliente.getStature());
        System.out.println("ID: " + cliente.getIdentifity());
    }
}
