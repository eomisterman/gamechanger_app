package com.example.backend.controller

import com.example.backend.model.Event
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import org.springframework.core.io.ClassPathResource
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
class ScheduleController {

    @GetMapping("/")
    fun helloWorld(): String {
        return "Hello, world!"
    }

    @GetMapping("/schedule")
    fun getSchedule(): List<Event> {
        val mapper = jacksonObjectMapper()
        val jsonFile = ClassPathResource("static/schedule.json")
        val json = jsonFile.inputStream.bufferedReader().use { it.readText() }
        val games = mapper.readValue<List<Event>>(json)
        return games
    }

}