public class Half extends CalculateTotal {
    private int hour;
    private int guidedClasses;
    private int value;
    private int calculate;

    public Half(int hour) {
        super("Essential", "Basico"); 
        this.hour = hour;
        this.guidedClasses = 40000;
        this.value = 20000;
    }

    public int getHour() {
        return hour;
    }

    public int getGuidedClasses() {
        return guidedClasses;
    }

    public int getValue() {
        return value;
    }

    @Override
    public double calculate() {
        calculate = hour * value + guidedClasses;
        return calculate;
    }
}
