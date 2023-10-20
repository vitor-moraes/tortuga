class CreateHabits < ActiveRecord::Migration[7.1]
  def change
    create_table :habits do |t|
      t.string :name, null: false
      t.string :nature, default: "good"
      t.string :days_in_week, array: true, default: []
      t.string :times_in_day, array: true, default: []
      t.timestamps
    end
  end
end
