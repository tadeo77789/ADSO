public abstract class Persona {

    private final int identifity;
    private final String name;
    private final String lastName;
    private final String address;
    private final String telephone;
    private final String rh;
    private final String license;

    public Persona(int identifity, String name, String lastName, String address, String telephone, String rh, String license) {
        this.identifity = identifity;
        this.name = name;
        this.lastName = lastName;
        this.address = address;
        this.telephone = telephone;
        this.rh = rh;
        this.license = license;
    }

    public int getIdentifity() {
        return identifity;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public String getAddress() {
        return address;
    }

    public String getTelephone() {
        return telephone;
    }

    public String getRh() {
        return rh;
    }

    public String getLicense() {
        return license;
    }
}
