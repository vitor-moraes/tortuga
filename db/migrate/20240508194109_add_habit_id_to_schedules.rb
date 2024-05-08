class AddHabitIdToSchedules < ActiveRecord::Migration[7.1]
  def change
    add_column :schedules, :habit_id, :integer
  end
end
