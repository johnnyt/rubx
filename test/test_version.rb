require 'helper'

class TestVersion < Minitest::Test
  def test_version
    assert Rubx::VERSION
  end
end
