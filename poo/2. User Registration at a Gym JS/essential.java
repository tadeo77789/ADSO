public class Essential extends CalculateTotal {
    private int hour;
    private int value;
    private int calculate;

    public Essential(int hour) {
        super("Essential", "Basico");
        this.hour = hour;
        this.value = 30000;
    }

    public int getHour() {
        return hour;
    }

    public int getValue() {
        return value;
    }

    @Override
    public double calculate() {
        calculate = hour * value;
        return calculate;
    }
}
