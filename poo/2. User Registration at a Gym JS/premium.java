public class Premium extends CalculateTotal {
    private int hour;
    private int coach;
    private int humidArea;
    private int value;
    private int calculate;

    public Premium(int hour) {
        super("Essential", "Basico"); 
        this.hour = hour;
        this.coach = 50000;
        this.humidArea = 70000;
        this.value = 40000;
    }

    public int getHour() {
        return hour;
    }

    public int getCoach() {
        return coach;
    }

    public int getHumidArea() {
        return humidArea;
    }

    public int getValue() {
        return value;
    }

    @Override
    public double calculate() {
        calculate = hour * value + coach + humidArea;
        return calculate;
    }
}
