package com.duometrics.backend.controller;

import com.duometrics.backend.model.XpHistory;
import com.duometrics.backend.service.XpHistoryService;
import com.duometrics.backend.model.BestXpDay;
import com.duometrics.backend.model.MonthlyXp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.IOException;
import java.util.List;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/duolingo")
public class XpHistoryController {

    private final XpHistoryService xpHistoryService;

    public XpHistoryController(XpHistoryService xpHistoryService) {
        this.xpHistoryService = xpHistoryService;
    }

    @GetMapping("/history")
    public XpHistory getHistory() throws IOException {
        return xpHistoryService.loadHistory();
    }

    @GetMapping("/stats/total-xp")
    public int getTotalXp() {
        return xpHistoryService.calculateTotalXp();
    }

    @GetMapping("/stats/study-days")
    public int getStudyDays() {
        return xpHistoryService.calculateStudyDays();
    }

    @GetMapping("/stats/best-xp-day")
    public BestXpDay getBestXpDay() {
        return xpHistoryService.calculateBestXpDay();
    }

    @GetMapping("/stats/monthly-xp")
    public List<MonthlyXp> getMonthlyXp() {
        return xpHistoryService.calculateMonthlyXp();
    }

    @GetMapping("/stats/total-study-time")
    public int getTotalStudyTime() {
        return xpHistoryService.calculateTotalStudyTime();
    }

    @GetMapping("/stats/total-sessions")
    public int getTotalSessions() {
        return xpHistoryService.calculateTotalSessions();
    }
    
    
}