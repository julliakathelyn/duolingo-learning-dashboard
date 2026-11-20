package com.duometrics.backend.model;

import java.util.List;

public class XpHistory {

    private List<XpSummary> summaries;

    public List<XpSummary> getSummaries() {
        return summaries;
    }

    public void setSummaries(List<XpSummary> summaries) {
        this.summaries = summaries;
    }
}