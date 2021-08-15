DENO := deno

tests: fmt-check
	$(DENO) test --coverage=cov_profile *.test.mjs

tests-cov: tests
	$(DENO) coverage cov_profile --lcov > cov_profile/cov.lcov

fmt:
	$(DENO) fmt rusn.mjs tests

fmt-check:
	$(DENO) fmt rusn.mjs tests --check
