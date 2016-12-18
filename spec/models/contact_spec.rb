require 'rails_helper'

RSpec.describe Contact, type: :model do
	let(:valid_contact) {
		Contact.new(
			first_name: 'Sunjay',
			last_name: 'Kumar',
			email: "sunjaydk@gmail.com",
			message: "Yo what's up?"
		)
	}

	describe 'validations' do
		
		it "validates with valid inputs" do
			expect(valid_contact.save).to be true
		end
		
		it "requires first_name" do
			valid_contact.first_name = nil
			expect(valid_contact.save).to be_falsey
		end
		
		it "requires last_name" do
			valid_contact.last_name = nil
			expect(valid_contact.save).to be_falsey
		end

		it "requires email" do
			valid_contact.email = nil
			expect(valid_contact.save).to be_falsey
		end

		it "requires properly formatted email" do
			valid_contact.email = 'sunjaydk'
			expect(valid_contact.save).to be_falsey
		end
		
		it "requires message" do
			valid_contact.message = nil
			expect(valid_contact.save).to be_falsey
		end
	end
end
