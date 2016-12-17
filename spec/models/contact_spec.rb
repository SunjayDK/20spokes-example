require 'rails_helper'

RSpec.describe Contact, type: :model do
	let(valid_contact) {
		Contact.new(
			first_name: 'Sunjay',
			last_name: 'Kumar',
			email: "lorenzianheteroceran@gmail.com",
			message: "Yo what's up?"
		)
	}

	describe 'validations' do
		
		before do
			test_contact = valid_contact.clone
		end
		
		it "validates with valid inputs" do
			expect(test_contact.save).to be True
		end
		
		it "does not require first_name or last_name" do
			test_contact.first_name = nil
			test_contact.last_name = nil
			expect(test_contact.save).to be True
		end

		it "requires email" do
			test_contact.email = nil
			expect(test_contact.save).to be_falsey
		end
		
		it "requires message" do
			test_contact.message = nil
			expect(test_contact.save).to be_falsey
		end
	end
end
