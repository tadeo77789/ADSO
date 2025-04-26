public class extras extends salary {
    private double dayTime;
    private double nightTime;
    private double holiDays;
    private double extrass;

    public extras(double dayTime, double nightTime, double holiDays, int salario) {
        super(1080292891, "Luis", "Duarte", salario);
        this.dayTime = dayTime;
        this.nightTime = nightTime;
        this.holiDays = holiDays;
    }
    public double getDayTime() {
        return dayTime;
    }
    public double getNightTime() {
        return nightTime;
    }
    public double getHoliDays() {
        return holiDays;
    }

    @Override
    public double payTotal(){
        this.extrass = (0.125 * (dayTime * this.getSalario())) + (0.175* (this.getSalario() * nightTime)) + (0.200 * (this.getSalario() * holiDays));
        return this.extrass;
    }
}