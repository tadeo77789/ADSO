public class discount extends salary {
    private double health;
    private double pension;
    private double arl;
    private double discount;

    public discount(double health, double pension, double arl, int salario) {
        super(1080292891, "Luis", "Duarte", salario);
        this.health = health;
        this.pension = pension;
        this.arl = arl;
    }
    public double getHealth() {
        return health;
    }
    public double getPension() {
        return pension;
    }
    public double getArl() {
        return arl;
    }
 
    @Override
    public double payTotal(){
        this.discount = (this.getSalario() * health) + (this.getSalario() * pension) + (this.getSalario() * arl);
        return this.discount;
    }
}