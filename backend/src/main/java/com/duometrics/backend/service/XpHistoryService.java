
package com.duometrics.backend.service;

import com.duometrics.backend.model.XpHistory;
import tools.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import com.duometrics.backend.model.XpSummary;
import com.duometrics.backend.model.BestXpDay;

import java.io.File;

@Service
public class XpHistoryService {

    private final ObjectMapper objectMapper;

    public XpHistoryService(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public XpHistory loadHistory() {

        File file = new File("../data/duolingo-xp-history.json");

        return objectMapper.readValue(file, XpHistory.class);
    }

    public int calculateTotalXp() {

    XpHistory history = loadHistory();

    int totalXp = 0;

    for (XpSummary summary : history.getSummaries()) {

        if (summary.getGainedXp() != null) {
            totalXp += summary.getGainedXp();
        }
    }

        return totalXp;
    }

    public int calculateStudyDays() {

    XpHistory history = loadHistory();

    int studyDays = 0;

    for (XpSummary summary : history.getSummaries()) {

        if (summary.getGainedXp() != null
                && summary.getGainedXp() > 0) {
            studyDays++;
        }
    }

        return studyDays;
    }

    public BestXpDay calculateBestXpDay() {
        XpHistory history = loadHistory();

        int bestXp = 0;
        long bestDate = 0;

    for (XpSummary summary : history.getSummaries()) {
        if (summary.getGainedXp() != null
                && summary.getGainedXp() > bestXp) {

            bestXp = summary.getGainedXp();
            bestDate = summary.getDate();
        }
    }

    return new BestXpDay(bestXp, bestDate);
}
}