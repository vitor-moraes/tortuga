class AddScheduleIdToHabits < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key(:schedules, :habits)
  end
end