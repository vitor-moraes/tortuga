# frozen_string_literal: true

# Documentation
class HabitsController < ApplicationController
  # Documentation
  def index
    @habits = ::Habit.all
  end
end
