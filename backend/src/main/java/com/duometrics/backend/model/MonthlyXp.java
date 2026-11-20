package com.duometrics.backend.model;

public class MonthlyXp {

    private String month;
    private int xp;

    public MonthlyXp(String month, int xp) {
        this.month = month;
        this.xp = xp;
    }

    public String getMonth() {
        return month;
    }

    public int getXp() {
        return xp;
    }
}