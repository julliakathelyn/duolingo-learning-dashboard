package com.duometrics.backend.model;

public class XpSummary {

    private Integer gainedXp;
    private boolean frozen;
    private boolean streakExtended;
    private long date;
    private long userId;
    private boolean repaired;
    private Integer dailyGoalXp;
    private Integer numSessions;
    private Integer totalSessionTime;
    private boolean shielded;

    public Integer getGainedXp() {
        return gainedXp;
    }

    public boolean isFrozen() {
        return frozen;
    }

    public boolean isStreakExtended() {
        return streakExtended;
    }

    public long getDate() {
        return date;
    }

    public long getUserId() {
        return userId;
    }

    public boolean isRepaired() {
        return repaired;
    }

    public Integer getDailyGoalXp() {
        return dailyGoalXp;
    }

    public Integer getNumSessions() {
        return numSessions;
    }

    public Integer getTotalSessionTime() {
        return totalSessionTime;
    }

    public boolean isShielded() {
        return shielded;
    }
}