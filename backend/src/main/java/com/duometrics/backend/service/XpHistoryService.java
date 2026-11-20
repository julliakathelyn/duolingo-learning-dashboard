package com.duometrics.backend.service;

import com.duometrics.backend.model.XpHistory;
import tools.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import com.duometrics.backend.model.XpSummary;
import com.duometrics.backend.model.BestXpDay;
import com.duometrics.backend.model.MonthlyXp;

import java.time.Instant;
import java.time.YearMonth;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
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

    public int calculateTotalStudyTime() {

        XpHistory history = loadHistory();

        int totalTime = 0;

        for (XpSummary summary : history.getSummaries()) {
            if(summary.getTotalSessionTime() != null) {
                totalTime += summary.getTotalSessionTime();
            }
        }

        return totalTime;

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

    public List<MonthlyXp> calculateMonthlyXp() {

        XpHistory history = loadHistory();

        Map<YearMonth, Integer> monthlyTotals = new TreeMap<>();

        for (XpSummary summary : history.getSummaries()) {

            if (summary.getGainedXp() == null) {
                continue;
            }

            var date = Instant.ofEpochSecond(summary.getDate())
                    .atZone(ZoneId.of("America/Sao_Paulo"))
                    .toLocalDate();

            YearMonth month = YearMonth.from(date);

            int xp = summary.getGainedXp();

            int currentXp = monthlyTotals.getOrDefault(month, 0);

            monthlyTotals.put(month, currentXp + xp);
        }

        List<MonthlyXp> result = new ArrayList<>();

        for (Map.Entry<YearMonth, Integer> entry : monthlyTotals.entrySet()) {
            result.add(new MonthlyXp(entry.getKey().toString(), entry.getValue()));
        }

        return result;
    }

}