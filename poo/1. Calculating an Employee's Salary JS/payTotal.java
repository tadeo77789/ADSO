public abstract class payTotal {
    private final String name;
    private final String lastName;
    private int salary;
    private int calculateSubsidio;

    public payTotal(String name, String lastName, int salary, int calculateSubsidio) {
        this.name = name;
        this.lastName = lastName;
        this.salary = salary;
        this.calculateSubsidio = calculateSubsidio;
        this.calculateSubsidio();
    }
    public String getName() {
        return this.name;
    }
    public String getLastName() {
        return this.lastName;
    }
    public int getSalary() {
        return this.salary;
    }
    public int getCalculateSubsidio() {
        return this.calculateSubsidio;
    }

    public void calculateSubsidio(){
        if(salary < (2 * 1423500)){
            this.calculateSubsidio = salary + 200000;
        }else{
            this.calculateSubsidio = salary;
        }
    }

    public abstract double payTotal1();
}
