package com.duometrics.backend.model;

public class BestXpDay {

    private int xp;
    private long date;

    public int getXp() {
    return xp;
    }

    public long getDate() {
    return date;
    }

    public BestXpDay(int xp, long date) {
    this.xp = xp;
    this.date = date;
    }

}