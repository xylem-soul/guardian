# 🛣 Roadmap

To get more information on Roadmap, please click: [https://app.zenhub.com/workspaces/guardian-618c27c08661c0001461263a/roadmap?invite=true](https://app.zenhub.com/workspaces/guardian-618c27c08661c0001461263a/roadmap?invite=true)

## ---- August 2023----

### Restore (DR) of user accounts and encrypted documents

* An approach to storing/managing all the keys outside Guardian - in the escrow service or just as a back-up. Export/import tooling.
* Capability to restore user accounts and their associated keys such as to replicate guardian installation
* Guardian restore functionality should use whatever information is available to it to restore its original setup, specifically when user accounts have been restored it should result in the decryption and thus accessibility of the encrypted documents.

Referral Link : [https://github.com/hashgraph/guardian/issues/1814](https://github.com/hashgraph/guardian/issues/1814)

### CDM's AMS-III.D. Methodology

* Design schemas for AMS-III.D. methodology, create PowerPoint presentation, and conduct webinar.
*   Schemas will also be designed for the following tools:

    * Tool 03 - Tool to calculate project or leakage CO2 emissions from fossil fuel combustion
    * Tool 05 - Baseline, project and/or leakage emissions from electricity consumption and monitoring of electricity generation
    * Tool 06 - Project emissions from flaring
    * Tool 16 - Project and leakage emissions from anaerobic digesters

    Referral Link : [https://github.com/hashgraph/guardian/issues/2307](https://github.com/hashgraph/guardian/issues/2307)

### Avery Dennison RFID Inlay GHGP Product Policy (Cradle-To-Gate)

* Expand the Guardian policy to include all applicable supply chain stages.

Referral Link : [https://github.com/hashgraph/guardian/issues/2306](https://github.com/hashgraph/guardian/issues/2306)

## ---- September 2023----

### Evolution of policy differentiation

* Add comparison of document schemas associated with the policies
* Implement the ability fro Guardian to compare policies without importing them into Guardian (i.e. without it appearing in the various grids etc).
*   Allow for mass-comparison of policies such that a user should be able to search for policies 'similar' to 'different' to some other policy based on some similarity threshold.

    * Ability to pre-process policies creating some data structures (hashes?) to enable more efficient comparison with other policies in the future

    Referral Link : [https://github.com/hashgraph/guardian/issues/1793](https://github.com/hashgraph/guardian/issues/1793)

## GHGP Corporate Standard Policy V2

The VVB role and corresponding workflow steps should be incorporated in the current version of GHGP policy as an optional role and optional workflow blocks. The workflow steps to be included (as optional) are the VVB verifying data sources and/or the VVB verifying the GHG inventory/calculations. The organization should be able to choose either or both the steps. The process step for Registry approving/rejecting GHG sources should be removed and a process step for Registry to approve the issuance of tokens should be added.

Referral Link : [https://github.com/hashgraph/guardian/issues/](https://github.com/hashgraph/guardian/issues/1666)[2571](https://github.com/hashgraph/guardian/issues/2571)

## UNFCCC 'Tools' as a high-level abstraction/component in Guardian policies

Introduce 'Tools' concept as a 'first-class' citizen of Guardian policies such that policy authors can 'just' re-use Tools (without any modification), linking them together and mixing with custom policy blocks etc in a policy to deliver a seamless onboarding experience for environment projects managed by non-technical individuals.

'Tools' should have the following properties:

* contain schemas for VCs, logic (including especially calculation block and if-then-else capability) and be able to 'consume' and 'produce' multiple VC documents
* be shareable and re-useable across instances and within an instace
* be signed and immutable in the sense that they don't requite any modification to be included/used in a policy
* should be able to 'include' other Tools, i.e. Tools can be nested into other tools to reflect e.g. the relationship between [Tool 14](https://cdm.unfccc.int/methodologies/PAmethodologies/tools/am-tool-14-v2.pdf) (a container) and [Tool 3](https://cdm.unfccc.int/methodologies/PAmethodologies/tools/am-tool-03-v3.pdf) (embedded in T14)

Referral Link : [https://github.com/hashgraph/guardian/issues/2630](https://github.com/hashgraph/guardian/issues/2630)

## Project data comparison as produced/captured by policies

Introduce the capability to compare artefacts of the same or different policies:

* VC and VP documents produced by the policy individually and as part of the trust chain comparison
* tokens and their entire trust chains

The comparison should result in a simple numeric indicator on the similarity of the compared items (i.e. 75% compatible), and other indicators such as 'trust chain A has 15% more elements than trust chain B' helping users to draw conclusion on the relative standing or 'quality' of the corresponding compared items.

Referral Link: [https://github.com/hashgraph/guardian/issues/2375](https://github.com/hashgraph/guardian/issues/2375)

## ---- October 2023----

### Contract-based delegation for token retirement operations

Implement an enhancement for the token creation and retirement operation essentially creating contract-managed ACL list of delegate (contract) accounts which can retire tokens. The idea is as follows:

* An SR deploys a smart contract which will be the creator/destroyer of tokens of a particular type. This means that the 'burn' and/or 'wipe' key for the token would belong to this smart contract. The SR adds this key as the wipe key to the token 'definition'.
* This smart contract contains a provision for keeping a map of (contract) account addresses to tokens it controls.
* Each of the 3rd party 'exchange' contract, for each pair, requests an authorization from the 'Manager' smart contracts for performing retirement operations.
* When/if the SR approves such request the 'exchange' smart contract's address gets added tot he 'authorized' map of address-token pairs.
* From this point this 'exchange' smart contract can call 'retire' method on the 'Manager' smart contract, the latter checks if the caller's address is in the 'authorized' list and then performs the requested action.

Referral Link : [https://github.com/hashgraph/guardian/issues/2011](https://github.com/hashgraph/guardian/issues/2011)

### AMS-III.BB. Webinar

* Design schemas for AMS-III.BB. methodology, create PowerPoint presentation, and conduct webinar.
* Schemas will also be designed for the following tools:
  * Tool 07 - Tool to calculate the emission factor for an electricity system
  * Tool 21 - Demonstration of additionality of small-scale project activities
  * Tool 33 - Default values for common parameters

Referral Link : [https://github.com/hashgraph/guardian/issues/2308](https://github.com/hashgraph/guardian/issues/2308)

### Block and policy discoverability/search

* Introduce a capability into Guardian where a user can search, directly from the editor, examples of the usage of specific blocks
* The search scope should be inside a Guardian instance and, additionally, further through all published policies
* Uses should be able to preview the usage of the block without having to import policy into their Guardian instance
*   There should be additional filters in the UI that would allow users to restrict the scope of the search based on:

    * date range
    * SR (list)
    * Presence/absence of tags and their scoring (e.g. 'minimum 50 thumbs-up tags')
    * name

    Referral Link : [https://github.com/hashgraph/guardian/issues/2281](https://github.com/hashgraph/guardian/issues/2281)

### Verra VM0044 Webinar

Design and develop schemas for the VM0044 methodology, create a PowerPoint presentation, and conduct webinar.

Referral Link : [https://github.com/hashgraph/guardian/issues/2309](https://github.com/hashgraph/guardian/issues/2309)

## ---- November 2023----

## Enhancement by adding new features

1. Improving Guardian UI by adding more UI elements and also adding more colorful headers which can be customized.
2. Creating a static landing page which will have capability of performing project comparison within same instance using different parameters such as scale size, sectoral scopes, etc.
3. Implementing AI search for allowing Project developers to search policies as per the information entered.
4. Implementing Guider Search for allowing project developers to search policies using different parameters within same instance.
5. Implementation of property field when schema is created, which will be used for standardizing as per IWA specification.

Referral Link : [https://github.com/hashgraph/guardian/issues/2850](https://github.com/hashgraph/guardian/issues/2850)

## Development of CDM AMS-III - AR policy with Tools

Development of the policy with all details mentioned in the design schema.\
Tools involved in this policy also needs to be developed. The tools are listed below:

1. Tool 07- Tool to calculate the emission factor for an electricity system
2. Tool 19- Demonstration of additionality of microscale project activities
3. Tool 21- Demonstration of additionality of small-scale project activities 
4. Tool 33- Default values for common parameters

Referral Link : [https://github.com/hashgraph/guardian/issues/2765](https://github.com/hashgraph/guardian/issues/2765)

## Development of AMS-II.G with Tools

Development of the policy with all details mentioned in the design schema.\
Tools involved in this policy also needs to be developed. The tools are listed below:

1. Tool 30- Calculation of the fraction of non-renewable biomass
2. Tool 19- Demonstration of additionality of microscale project activities
3. Tool 21- Demonstration of additionality of small-scale project activities 
4. Tool 33- Default values for common parameters

Referral Link : [https://github.com/hashgraph/guardian/issues/2766](https://github.com/hashgraph/guardian/issues/2766)

## Development of CDM's AMS-III.D. with Tools

Development of the policy with all details mentioned in the design schema.\
Tools involved in this policy also needs to be developed. The tools are listed below:

1. Tool 03- Tool to calculate project or leakage CO2 emissions from fossil fuel combustion
2. Tool 05- Baseline, project and/or leakage emissions from electricity consumption and monitoring of electricity generation
3. Tool 06- Project emissions from flaring
4. Tool 14- Project and leakage emissions from anaerobic digesters

Referral Link : [https://github.com/hashgraph/guardian/issues/2767](https://github.com/hashgraph/guardian/issues/2767)

## PWRM0001 Plastic Waste Collection Methodology, v1.1 - Webinar

Design and develop schemas for the Plastic Waste Collection methodology, create a PowerPoint presentation, and conduct webinar.

Referral Link : [https://github.com/hashgraph/guardian/issues/2311](https://github.com/hashgraph/guardian/issues/2311)

### Supply Chain and Macro Dynamics

Investigate and determine the rules that will govern supply chain and macro dynamics of a decentralized GHG data ecosystem. Key questions include but are not limited to:

* How will the use of offsets and RECs influence upstream and downstream emissions?
* How will the emissions of material inputs and intermediate products impact the emissions of final products?
* How will the emissions of final products impact scope 3 emissions of downstream customers?
* How can supply chain actors better coordinate data, approaches, and methodologies of emissions that are from the same source, but different scopes and categories throughout supply chains and product life cycles?
* How can emissions be properly categorized, calculated, and allocated in a way that avoids double and under counting?
* As emissions are measured and calculated in real-time, how can corresponding inventories be updated?
* How can inventories be updated to reflect dynamic changes to supply chains and corporate structures?

Identify and implement new Guardian features that facilitate the necessary supply chain and macro-dynamics.

Referral Link : [https://github.com/hashgraph/guardian/issues/2012](https://github.com/hashgraph/guardian/issues/2012)

## ---- December 2023----

### Policy equivalence assessment based on their execution results for the same data

* Introduce the capability into the Guardian codebase to easily run 'test dataset' on a policy instance such that the results of the 'run' are also captured, saved and can be compared between runs. Such test runs should not have effect on the external persistent storage (Hedera, IPFS), i.e. this should be performed in the 'test-run' mode.
* Introduce the capability to capture the 'input' into the policy during its execution, in both the 'test-run' and the production operation mode. The 'input' should be saved into the DB, from which it can then be used for running the policy test as per above.
* It should be possible to export saved inputs and results.
* Replay the trust chain for an asset based on the public sources and see if the results (the issued assets) would've been the same.

Referral Link : [https://github.com/hashgraph/guardian/issues/1886](https://github.com/hashgraph/guardian/issues/1886)

### Verra VM0041 Webinar

Design schemas for the VM0041 methodology, create a PowerPoint presentation, and conduct webinar.

Referral Link : [https://github.com/hashgraph/guardian/issues/2312](https://github.com/hashgraph/guardian/issues/2312)

## ---- January 2024----

### Implement discontinuing policy workflow

Implement the policy deprecation workflow which includes:

* Guardian UI allowing issuing SR to discontinue a policy (version) or the entire policy from a certain date (in the future or 'now').
* Policy grid should display a suitable marker against non-active policies, and a different for the ones soon expiring.
* An appropriate message posted in the corresponding Hedera topic recording the 'discontinuing' decision
* For in-progress projects that have been registered and are operating under the policy it should be possible to 'switch' to the appropriate version of the policy which is still valid.

Referral Link : [https://github.com/hashgraph/guardian/issues/2030](https://github.com/hashgraph/guardian/issues/2030)

### Gold Standard’s Carbon Sequestration through Accelerated Carbonation of Concrete Aggregate Webinar

* Design schemas for the Carbon Sequestration through Accelerated Carbonation of Concrete Aggregate methodology, create a PowerPoint presentation, and conduct webinar.
* Development of the policy using the schemas and workflow designed

Referral Link : [https://github.com/hashgraph/guardian/issues/2321](https://github.com/hashgraph/guardian/issues/2321)

### Business User Policy Development Feature

Business Analyst and Sustainability Consultants generally are less technical than developers. Although JSON is the most functional way to construct Guardian Policies, there may be more formal ways to integrate traditional business tool and rules validation capabilities to automatically compile policies.

Referral Link : [https://github.com/hashgraph/guardian/issues/1885](https://github.com/hashgraph/guardian/issues/1885)

### Geographic raster imagery support in Guardian

Introduce support for getTIFF and other raster types of data.

Referral Link : [https://github.com/hashgraph/guardian/issues/1930](https://github.com/hashgraph/guardian/issues/1930)

### HBAR GHG Policy Research

Create a Guardian policy that quantifies and reports GHG emissions from HBAR, using the GHGP product Standard and ICT Sector Guidance for guidance and requirements mapping.

{% embed url="https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdfhttps://ghgprotocol.org/sites/default/files/GHGP-ICTSG%20-%20ALL%20Chapters.pdf" %}

Referral Link : [https://github.com/hashgraph/guardian/issues/1667](https://github.com/hashgraph/guardian/issues/1667)

### Post-minting data enrichment for issued tokens

Projects should have ability to enrich the trust-chain of tokens with additional data in the form of VC/VP after the tokens have been created through editable metadata. Diagrammatically this should look like this:

```scss
VP1(VC1, VC2) <---- Token
                  /
VP2(VC3) <-------/ (edited) 
```

Where VP2 (VC3) have been linked to the token after the token have been minted.

It should be possible to specify, at minting time, that a particular token instance prohibits adding and/or removing of any information after the creation.

Probably depends on [https://github.com/hashgraph/hedera-improvement-proposal/discussions/607](https://github.com/hashgraph/hedera-improvement-proposal/discussions/607), also visible here: [https://hips.hedera.com/hip/hip-657](https://hips.hedera.com/hip/hip-657)

Referral Link : [https://github.com/hashgraph/guardian/issues/1896](https://github.com/hashgraph/guardian/issues/1896)

### FireBlocks/ Meetaco Integration

We need to integrate FireBlocks , a Key management tool to manage the Keys and secure Guardian. To get complete info on Fireblocks, please look at [https://www.fireblocks.com/](https://www.fireblocks.com/)

Referral Link : [https://github.com/hashgraph/guardian/issues/1314](https://github.com/hashgraph/guardian/issues/1314)

### Conforming to Hedera DID, VC, VP, Standards

Update to memo field VP/DID structure to normalize DID spec with the rest of Hedera DID method work (which will also be updated)

Referral Link : [https://github.com/hashgraph/guardian/issues/2211](https://github.com/hashgraph/guardian/issues/2211)