package com.example.backend.model

import com.fasterxml.jackson.annotation.JsonProperty

data class Event(
        val id: String,
        @JsonProperty("event_type")
        val eventType: String,
        val status: String,
        @JsonProperty("home_away")
        val homeAway: String,
        @JsonProperty("opponent_id")
        val opponentId: String,
        @JsonProperty("opponent_name")
        val opponentName: String,
        val start: StartEnd,
        val end: StartEnd,
        val timezone: String,
        val notes: String?,
        val location: String
)

data class StartEnd(
        val datetime: String
)